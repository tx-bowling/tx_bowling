class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token

  private

  def authenticate
    return if (entity.present? && entity.authenticate(auth_params[:password]))

    render json: {error: 'Invalid credentials'}, status: :unauthorized
  end
end
