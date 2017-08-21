import moment from 'moment'

/**
 * Display current time in a human readable way
 */
const Clock = () => (
  <div>
    <h2 className="section title is-2">mis à jour à {moment().format('H[h]mm')}</h2>
    <style jsx>{`
      .button {
        padding:2rem
      }
    `}</style>
  </div>
)

export default Clock