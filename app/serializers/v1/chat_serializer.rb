module V1
  class ChatSerializer < ActiveModel::Serializer

    attributes :title, :location, :abstract, :id
    has_many :users, serializer: V1::UserSerializer

    def abstract
      object.body[0..200]
    end

  end
end