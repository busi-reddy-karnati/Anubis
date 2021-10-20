import React, {useState} from 'react';
import {useStyles} from './SubmissionTest.styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Button} from '@material-ui/core';
import SubmissionTestExpanded from '../SubmissionTestExpanded/SubmissionTestExpanded';


export default function SubmissionTest({test}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      className={classes.root}
    >
      <Box
        className={classes.title}
      >
        <Typography
          className={classes.iconWrapper}
        >
          <FiberManualRecordIcon className={clsx(classes.circleIcon,
            test.result.passed === true ? classes.success : classes.error)}/>
        </Typography>

        <Typography
          className={classes.name}
        >
          {test.test.name}
        </Typography>
        <Typography
          className={clsx(classes.testStatus, test.result.passed === true ? classes.success : classes.error)}
        >
          {test.result.passed === true ? 'Successful' : 'Failed'}
        </Typography>
      </Box>
      <Typography className={classes.expand}>
        <Button
          onClick={toggleExpanded}
        >
          Expand
        </Button>
      </Typography>
      {expanded && <SubmissionTestExpanded/>
      }
    </Box>
  );
}
