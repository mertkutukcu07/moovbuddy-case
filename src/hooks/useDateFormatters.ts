import { format, formatDuration, intervalToDuration } from 'date-fns'

export const useDateFormatters = () => {
    const formatDate = (date: string) => {
        if (!date) return '-'
        return format(new Date(date), 'd MMMM yyyy')
    }

    const formatDurationTime = (minutes: number) => {
        if (!minutes) return '-'
        return formatDuration(
            intervalToDuration({
                start: 0,
                end: minutes * 60 * 1000,
            }),
            {
                format: ['hours', 'minutes'],
                zero: false,
                delimiter: ' ',
            }
        )
            .replace('hours', 'h')
            .replace('minutes', 'm')
    }

    return {
        formatDate,
        formatDurationTime,
    }
}
