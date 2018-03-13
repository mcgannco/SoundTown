class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
  unless params[:id].to_i == current_user.id
    render json: ['access denied'], status: 401
    return nil
  end

  @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: ['update failed'], status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :banner_img_url)
  end
end
