class SessionsController < ApplicationController
    skip_before_action :authorize

    # def index
    #     session[:session_hello] ||= "MountAlgo"
    #     cookies[:cookies_hello] ||= "MountAlgo"
    #     render json: { session: session, cookies:cookies.to_hash }
    # end

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # cookies.signed[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors: ["invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        # cookies.delete[:user_id]
        head :no_content
    end
end
