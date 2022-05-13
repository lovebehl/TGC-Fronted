import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
function AdvFilter(props) {
  const columns = [
    {
      name: 'Date',
      options: {
        filter: true
      }
    },
    {
      name: 'TGC Transfer',
      options: {
        filter: true
      }
    },
    {
      name: 'Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Title',
      options: {
        filter: true,
      }
    },
    
    {
      name: 'Status',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'active') {
            return (<Chip label="Active" color="secondary" />);
          }
          if (value === 'non-active') {
            return (<Chip label="Non Active" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
    {
      name: 'TGC Total',
      options: {
        filter: true,
        customBodyRender: (value) => {
          const nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });

          return nf.format(value);
        }
      }
    },
  ];

  const data = [
    ["23-Aug-2022",262.23,'Gabby George', 'Business Analyst',  'active', 100000],
    ["23-Aug-2022",262.23,'Jaden Collins', 'Attorney',  'non-active', 500000],
    ["23-Aug-2022",262.23,'Aiden Lloyd', 'Business Consultant',  'active', 200000],
    ["23-Aug-2022",262.23,'Franky Rees', 'Business Analyst',  'active', 50000],
    ["23-Aug-2022",262.23,'Aaren Rose', 'Business Consultant', 'unknown', 75000],
    ["23-Aug-2022",262.23,'Blake Duncan', 'Business Management Analyst',  'active', 94000],
    ["23-Aug-2022",262.23,'Frankie Parry', 'Agency Legal Counsel',  'non-active', 210000],
    ["23-Aug-2022",262.23,'Lane Wilson', 'Commercial Specialist', 'active', 65000],
    ["23-Aug-2022",262.23,'Robin Duncan', 'Business Analyst',  'unknown', 77000],
    ["23-Aug-2022",262.23,'Mel Brooks', 'Business Consultant', 'active', 135000],
    ["23-Aug-2022",262.23,'Harper White', 'Attorney',  'non-active', 420000],
    ["23-Aug-2022",262.23,'Kris Humphrey', 'Agency Legal Counsel',  'active', 150000],
    ["23-Aug-2022",262.23,'Frankie Long', 'Industrial Analyst', 'active', 170000],
    ["23-Aug-2022",262.23,'Brynn Robbins', 'Business Analyst',  'active', 90000],
    ["23-Aug-2022",262.23,'Justice Mann', 'Business Consultant',  'non-active', 33000],
    ["23-Aug-2022",262.23,'Addison Navarro', 'Business Management Analyst',  'non-active', 295000],
    ["23-Aug-2022",262.23,'Jesse Welch', 'Agency Legal Counsel',  'active', 100000],
    ["23-Aug-2022",262.23,'Eli Mejia', 'Commercial Specialist', 'active', 400000],
    ["23-Aug-2022",262.23,'Gene Leblanc', 'Industrial Analyst',  'active', 110000],
    ["23-Aug-2022",262.23,'Danny Leon', 'Computer Scientist',  'non-active', 220000],
    ["23-Aug-2022",262.23,'Lane Lee', 'Corporate Counselor', 'unknown', 180000],
    ["23-Aug-2022",262.23,'Jesse Hall', 'Business Analyst',  'active', 99000],
    ["23-Aug-2022",262.23,'Danni Hudson', 'Agency Legal Counsel',  'active', 90000],
    ["23-Aug-2022",262.23,'Terry Macdonald', 'Commercial Specialist',  'active', 140000],
    ["23-Aug-2022",262.23,'Justice Mccarthy', 'Attorney',  'active', 330000],
    ["23-Aug-2022",262.23,'Silver Carey', 'Computer Scientist',  'active', 250000],
    ["23-Aug-2022",262.23,'Franky Miles', 'Industrial Analyst',  'active', 190000],
    ["23-Aug-2022",262.23,'Glen Nixon', 'Corporate Counselor',  'non-active', 80000],
    ["23-Aug-2022",262.23,'Gabby Strickland', 'Business Process Consultant', 'unknown', 45000],
    ["23-Aug-2022",262.23,'Mason Ray', 'Computer Scientist', 'active', 142000]
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    print: true,
    rowsPerPage: 10,
    page: 0
  };

  const { classes, title } = props;

  return (
    <div className={classes.table}>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
