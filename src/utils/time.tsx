import dayjs, {type Dayjs} from "dayjs";
import React from 'react';
export function parseTimeFromNow(time:string):string;
export function parseTimeFromNow(time:Dayjs):string;
export function parseTimeFromNow(time:React.ReactNode):React.ReactNode;
export function parseTimeFromNow(time:Date):string;

export function parseTimeFromNow(time:any) : any {
  if (dayjs(time).isValid()) {
    if (dayjs().diff(dayjs(time), 'days') >= 1) {
      return dayjs(time).format('DD-MM-YYYY HH:mm');
    }
    return dayjs(time).fromNow();
  }
  return time;
}
