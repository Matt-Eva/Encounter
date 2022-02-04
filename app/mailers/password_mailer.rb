class PasswordMailer < ApplicationMailer
    def password_reset(user)
        @user = user
        mail_to: user.email, subject: "Encounter Password Reset"
    end
end
