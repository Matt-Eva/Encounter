class PasswordsController < ApplicationController
before_action :find_user

    def forgot
        user = find_user
        token = token_gen
        user.update!(recover_password: token)
        if user.recovery_password_digest != nil
            PasswordMailer.password_reset(user).deliver_later
            render json: {message: "Hi #{user.username}! We just sent you a password reset email. It may take a few minutes to get to your inbox."}
        end
    end

    def reset
        user = find_user
    end

    private

    def find_user
        User.find_by(email: params[:email])
    end

    def password_params
        params.permit(:password, :password_confirmation)
    end

    def token_gen
        SecureRandom.urlsafe_base64
    end

end
