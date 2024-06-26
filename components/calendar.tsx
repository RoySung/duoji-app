'use client'

import { useState } from 'react'

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<Date>()

  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  )

  return (
    <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} footer={footer} />
  )
}
