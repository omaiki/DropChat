module V1
  class MessageSerializer < ActiveModel::Serializer

    attributes :content, :abstract, :id
    belongs_to :user, serializer: V1::UserSerializer
    belongs_to :chat, serializer: V1::ChatSerializer

    def abstract
      object.content[0..200]
    end

  end
end
