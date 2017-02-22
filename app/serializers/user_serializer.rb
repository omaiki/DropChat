module V1
  class UserSerializer < ActiveModel::Serializer

    attributes :username
    attributes :first_name
    attributes :last_name
    attributes :location
    attributes :info

  end
end