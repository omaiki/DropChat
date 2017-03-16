
  class ChatsController < ApplicationController

    def index
      # @appointments = Appointment.order('appt_time ASC')
      # @appointment = Appointment.new

      # @chats = Chat.all.order(:id).reverse
      # @chat = Chat.new
      # render json: @chats, each_serializer: V1::ChatSerializer
    end

    def show
      @chat = Chat.find(params[:id])
      render json: @chat, serializer: V1::ChatSerializer
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
