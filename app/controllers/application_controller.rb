class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :rescue_from_record_invalid

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def rescue_from_record_invalid exception_obj
        render json: { errors: exception_obj.record.errors.full_messages}, status: :unprocessable_entity
    end

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
   
end
