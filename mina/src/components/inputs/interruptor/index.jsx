import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/* const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch); */

/* const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
}); */

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 32,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      //color: theme.palette.common.white,
      color: '#0C4394',
      /* '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      }, */
      '& + $track': {
        opacity: 1,
        //backgroundColor: theme.palette.primary.main,
        backgroundColor: '#fff',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 9,
    height: 9,
    boxShadow: 'none',
    margin: theme.spacing(0.3),
    
    
  },
  track: {
    border: `2px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function Interruptor(props) {
 
  /* const [state, setState] = React.useState({
    checkedA: false,
  });
 */
  /* const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }; */
  /* const handleChange = (event) => {
    //setState({ ...state, [event.target.name]: event.target.checked });
    props.changeState()
  }; */
  /* useEffect( () => {
    props.changeState()
  }, [])
 */
  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch checked={/* state.checkedA */ props.state}   onChange={() => props.changeState()}/* name="checkedA" */ />
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}