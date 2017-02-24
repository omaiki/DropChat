module V1
  class ChatsController < ApplicationController

    def index
      @chats = Chat.all.order(:id).reverse
      render json: @chats, each_serializer: ChatsSerializer
    end

    def show
      @chat = Chat.find(params[:id])
      render json: @chat, serializer: ChatSerializer
    end

    def create
      @chat = Chat.new(chat_params)
      if @chat.save
      render json: @chat, status: 201
      else
      render json: { errors: @chat.errors.full_messages }, status: 422
      end
    end

   private

    def chat_params
      params.require(:chat).permit(:title, :location)
    end

  end
end
