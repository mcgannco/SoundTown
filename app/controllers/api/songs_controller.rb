class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render 'api/songs/show'
  end

  def create
    @song = Song.(song_params)
    @song.author_id = current_user.id
    @song.title = @song.audio_file_name.split(".").first
    if @song.save
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :author_id, :artist_name)
  end

end
