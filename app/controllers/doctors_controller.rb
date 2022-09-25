class DoctorsController < ApplicationController
    skip_before_action :authenticate_patient, only: [:index, :show]

    def index
        doctors = Doctor.all.order(rating: :desc)
        render json: doctors, status: :ok
    end

    def show
        doctor = find_doctor
        render json: doctor, status: :ok
    end

    private
    def find_doctor
        doctor = Doctor.find(params[:id])
    end

end
