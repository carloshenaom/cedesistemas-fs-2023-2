import moment from 'moment'
import 'moment/dist/locale/es';


export const dateFormat = (

  dateTimeString,
  inputFormat="YYYY-MM-DDTHH:mm:ss",
  outputFormat="dddd, D [de] MMMM YYYY [a la(s)] h:mm a" ) => {

  var parsedDate = moment(dateTimeString, inputFormat);

    // Format the parsed date using the specified output format
  var formattedDate = parsedDate.format(outputFormat);

  return formattedDate
}
