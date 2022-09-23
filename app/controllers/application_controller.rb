class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authenticate_patient

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    private

    def unprocessable_entity(exception)
        render json: { errors: exception.record.errors }, status: :unprocessable_entity
    end

    def not_found(error)
        render json: { errors: {error.model => "Not found"}}, status: :not_found
    end

    # memoization, instantiate current patient
    def current_patient
        @current_patient ||= Patient.find_by_id(session[:patient_id])
    end

    def authenticate_patient
        render json: { errors: {Patient: "You don't have access"} }, status: :unauthorized unless current_patient
    end

    def authorized
        permitted = current_patient.admin?
        render json: { error: {Patient: "doesn't have permission"} }, status: :forbidden unless permitted
    end

end
