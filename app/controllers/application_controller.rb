class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :rescue_from_record_invalid
rescue_from ActiveRecord::RecordNotFound, with: :not_found

private

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def rescue_from_record_invalid invalid
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found(exception)
        render json: {errors: "#{exception.model} not found."}, status: :not_found
    end

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
   
end
