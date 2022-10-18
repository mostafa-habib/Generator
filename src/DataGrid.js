import * as React from "react";
import { DataGrid,GridLinkOperator,GridToolbarQuickFilter } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

//Row Data
const rows = [
  { id: 1, col1: "Mostafa", col2: "Egypt", col3: "55", col4: "Egypt" ,col5: "Egypt" },
  { id: 2, col1: "Ahmed", col2: "Cairo", col3: "2", col4: "Cairo" ,col5: "Cairo" },
  { id: 3, col1: "Amr", col2: "Cairo", col3: "36", col4: "Cairo" ,col5: "Cairo" },
  { id: 4, col1: "Omar", col2: "Qnatar", col3: "86", col4: "Qnatar" ,col5: "Qnatar" },
  { id: 5, col1: "sohail", col2: "Nasr City", col3: "10", col4: "Nasr City" ,col5: "Nasr City" },
  { id: 6, col1: "Mostafa", col2: "Egypt", col3: "55", col4: "Egypt" ,col5: "Egypt" },
  { id: 7, col1: "Ahmed", col2: "Cairo", col3: "2", col4: "Cairo" ,col5: "Cairo" },
  { id: 8, col1: "Amr", col2: "Cairo", col3: "36", col4: "Cairo" ,col5: "Cairo" },
  { id: 9, col1: "Omar", col2: "Qnatar", col3: "86", col4: "Qnatar" ,col5: "Qnatar" },
  { id: 10, col1: "sohail", col2: "Nasr City", col3: "10", col4: "Nasr City" ,col5: "Nasr City" },{ id: 1, col1: "Mostafa", col2: "Egypt", col3: "55", col4: "Egypt" ,col5: "Egypt" },
  { id: 11, col1: "Ahmed", col2: "Cairo", col3: "2", col4: "Cairo" ,col5: "Cairo" },
  { id: 12, col1: "Amr", col2: "Cairo", col3: "36", col4: "Cairo" ,col5: "Cairo" },
  { id: 13, col1: "Omar", col2: "Qnatar", col3: "86", col4: "Qnatar" ,col5: "Qnatar" },
  { id: 14, col1: "sohail", col2: "Nasr City", col3: "10", col4: "Nasr City" ,col5: "Nasr City" },{ id: 1, col1: "Mostafa", col2: "Egypt", col3: "55", col4: "Egypt" ,col5: "Egypt" },
  { id: 15, col1: "Ahmed", col2: "Cairo", col3: "2", col4: "Cairo" ,col5: "Cairo" },
  { id: 16, col1: "Amr", col2: "Cairo", col3: "36", col4: "Cairo" ,col5: "Cairo" },
  { id: 17, col1: "Omar", col2: "Qnatar", col3: "86", col4: "Qnatar" ,col5: "Qnatar" },
  { id: 18, col1: "sohail", col2: "Nasr City", col3: "10", col4: "Nasr City" ,col5: "Nasr City" },
  { id: 19, col1: "Mostafa", col2: "Egypt", col3: "55", col4: "Egypt" ,col5: "Egypt" },
  { id: 20, col1: "Ahmed", col2: "Cairo", col3: "2", col4: "Cairo" ,col5: "Cairo" },
  { id: 21, col1: "Amr", col2: "Cairo", col3: "36", col4: "Cairo" ,col5: "Cairo" },
  { id: 22, col1: "Omar", col2: "Qnatar", col3: "86", col4: "Qnatar" ,col5: "Qnatar" },
  { id: 23, col1: "sohail", col2: "Nasr City", col3: "10", col4: "Nasr City" ,col5: "Nasr City" },
  { id: 24, col1: "Mostafa", col2: "Egypt", col3: "55", col4: "Egypt" ,col5: "Egypt" },
  { id: 25, col1: "Ahmed", col2: "Cairo", col3: "2", col4: "Cairo" ,col5: "Cairo" },
  { id: 26, col1: "Amr", col2: "Cairo", col3: "36", col4: "Cairo" ,col5: "Cairo" },
  { id: 27, col1: "Omar", col2: "Qnatar", col3: "86", col4: "Qnatar" ,col5: "Qnatar" },
  { id: 28, col1: "sohail", col2: "Nasr City", col3: "10", col4: "Nasr City" ,col5: "Nasr City" },
];


// Quick Search for data
function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  );
}

export default function DataGridd({num}) {

  // for Column Grouping
  const columnGroupingModel = [
    {
      groupId: num === 1 ? 'Customer' : "عميل",
      description: '',
      children: [{ field: 'col1' }],
    },
    {
      groupId: num === 1 ? 'Basic info' : "المعلومات الأساسية",
      children: [
        {
          groupId: num === 1 ? 'Address' : "العنوان",
          children: [{ field: 'col4' }, { field: 'col5' }],
        },
        
      ],
    },
  ];
  // Column Names 
  const columns = [
    { field: "id",headerName: num === 1 ? "ID" : "الرقم التعريفي", width: 150 , hide: true },
    { field: "col1", headerName: num === 1 ? "Customer" : "عميل", width: 150,editable: true  },
    { field: "col2", headerName: num === 1 ? "Customer Location" : "مكان العميل", width: 150,editable: true  },
    { field: "col3",headerName: num === 1 ?  " UOM" : "وحدات القياس", width: 150,editable: true  },
    { field: "col4", headerName: num === 1 ?  "Locator" : "العنوان", width: 150, editable: true  },
    { field: "col5", headerName: num === 1 ?  "Warehouse" : "المخزن", width: 150,editable: true  }
  ];
  
  return (
    <div style={{ height: 400, width: "80%", margin:'auto' }}>
      <DataGrid rows={rows} columns={columns} pageSize={12} 
      experimentalFeatures={{ columnGrouping: true }}
      checkboxSelection
      disableSelectionOnClick
      columnGroupingModel={columnGroupingModel}
      initialState={{
        filter: {
          filterModel: {
            items: [],
            quickFilterLogicOperator: GridLinkOperator.Or,
          },
        },
      }}
      components={{ Toolbar: QuickSearchToolbar }}

       />
    </div>
  );
}
