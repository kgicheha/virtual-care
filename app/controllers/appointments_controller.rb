class AppointmentsController < ApplicationController

    def index
        appointment = Appointment.all
        render json: appointment, status: :ok
    end

    def show
        appointment = find_appt
        render json: appointment, status: :ok
    end

    def create
        appoinment = Appointment.create!(appt_params)
        render json: appoinment, status: :ok
    end

    def update
        appointment = find_appt
        appointment.update(appt_params)
        render json: appointment, status: :accepted
    end

    def destroy
        appointment = find_appt
        appointment.destroy
        head :no_content
    end

    private
    def find_appt
        appointment = Appointment.find(params[:id])
    end

    def appt_params
        params.permit(:appt_date_time, :duration, :appt_reason, :location)
        end
end
