module V1
  class V1::MessagesController < ApplicationController
    def index
      @messages = Message.all.order(:id).reverse
      render json: @messages, each_serializer: MessageSerializer
    end

    def show
      @message = Message.find(params[:id])
      render json: @message, serializer: MessageSerializer
    end

    def create
      @message = Message.new(message_params)
      if @message.save
      render json: @message, status: 201
      else
      render json: { errors: @message.errors.full_messages }, status: 422
      end
    end

   private

    def message_params
      params.require(:message).permit(:title, :location)
    end
  end
end
