class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render "api/songs/show"
  end

  def create
    @song = Song.new(song_params)
    @song.author_id = current_user.id
    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    if @song.destroy
      render 'api/songs/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :artist_name, :audio)
  end

end
