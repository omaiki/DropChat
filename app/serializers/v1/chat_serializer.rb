module V1
  class ChatSerializer < ActiveModel::Serializer

    attributes :title, :location, :abstract, :id
    belongs_to :user, serializer: V1::UserSerializer
    has_many :messages, serializer: V1::MessageSerializer

    def abstract
      object.title[0..200]
    end

  end
end