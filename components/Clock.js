import moment from 'moment'

/**
 * Display current time in a human readable way
 */
const Clock = () => (
  <div>
    {moment().format('MMMM Do YYYY, h:mm:ss a')}
  </div>
)

export default Clock