class PatientsController < ApplicationController
    skip_before_action :authenticate_patient, only: :create

    def index
      patients = Patient.all
      render json: patients, status: :ok
    end

    def show
        patient = Patient.find_by(id: session[:patient_id])
        if patient
          render json: patient
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        patient = Patient.create!(patient_params)
        session[:patient_id] = patient.id
        render json: patient, status: :ok
    end

    def update
      patient = find_patient
      patient.update(patient_params)
      render json: patient, status: :accepted
    end

    private

    def patient_params
        params.permit(:first_name, :last_name, :dob, :sex, :health_insurance, :mobile, :email, :password)
    end

    def find_patient
        patient = Patient.find(params[:id])
    end
end
