import { createUseStyles } from 'react-jss'
export default createUseStyles({
  cardPr: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    padding: '12px 16px',
    '&>div': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: "''",
        width: 300,
        height: 1,
        background: '#eee',
        left: 0,
        top: 30
      }
    }
  },
  titlePr: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5
  },
  pricePr: {
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center'
  },
  removePr: {
    cursor: 'pointer',
    color: '#ff0000',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
})
