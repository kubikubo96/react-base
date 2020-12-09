import dayjs from 'dayjs';

const dateNow = new Date();

//format time
export const formatTime = (time) => {
    return dayjs(time).format('YYYY-MM-DD HH:MM:00').toString();
};
//get all time. year, month, day, hour, minute, second ...
export const timeNow = (format) => {
    return dayjs(dateNow).format(format).toString();
};
//time now Unix Timestamp
export const timeNowUnix = Math.floor(dateNow.getTime() / 1000.0);
//
export const timeTomorrow = (format) => {
    return dayjs(dateNow).add(1, 'day').format(format).toString();
};
// time after tomorrow
export const timeAfterTomorrow = (format) => {
    return dayjs(dateNow).add(2, 'day').format(format).toString();
};
//time yesterday
export const timeYesterday = (format) => {
    return dayjs(dateNow).add(-1, 'day').format(format).toString();
};
// next 7 day
export const timeNextWeek = (format) => {
    return dayjs(dateNow).add(7, 'day').format(format).toString();
};
// this month
export const thisMonth = dayjs(dateNow).month() + 1;
// this year
export const thisYear = dayjs(dateNow).year();
// start time of this month
export const startTimeMoth = `${thisYear}-${thisMonth}-01 00:00:00`;
//end time of this month
export const endTimeMonth = `${thisYear}-${thisMonth}-31 23:59:59`;
//
export const startTimeToday = `${timeNow('YYYY-MM-DD')} 00:00:00`;
export const endTimeToday = `${timeNow('YYYY-MM-DD')} 23:59:59`;
export const startTimeTomorrow = `${timeTomorrow('YYYY-MM-DD')} 00:00:00`;
export const endTimeTomorrow = `${timeTomorrow('YYYY-MM-DD')} 23:59:59`;
export const startTimeNextWeek = `${timeNextWeek('YYYY-MM-DD')} 00:00:00`;
export const endTimeNextWeek = `${timeNextWeek('YYYY-MM-DD')} 23:59:59`;
export const startTimeYesterday = `${timeYesterday('YYYY-MM-DD')} 00:00:00`;
export const endTimeYesterday = `${timeYesterday('YYYY-MM-DD')} 23:59:59`;
