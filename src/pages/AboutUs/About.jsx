import { useState } from 'react';
import './About.css';
import { DataGrid } from '@mui/x-data-grid';

function About(){
    const [paginationModel, setPaginationModel] = useState({ pageSize: 8, page: 0, });

    const columns = [
        { field: 'participant', headerName: 'მონაწილე', flex: 1, minWidth: 60 },
        { field: 'projectWriting', headerName: 'პროექტის დაწერა', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'questionnaire', headerName: 'კითხვარი პროფესიების შესარჩევად / ტესტი', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'findProfessors', headerName: 'პროფესორების პოვნა', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'blogFilming', headerName: 'ბლოგების გადაღება', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'videoEditing', headerName: 'ვიდეო და აუდიო მონტაჟი', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'siteStructure', headerName: 'საიტის სტრუქტურა', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'uiux', headerName: 'საიტის UI და UX', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'logo', headerName: 'ლოგო', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'siteBuilding', headerName: 'საიტის აწყობა', flex: 1, minWidth: 60, cellClassName: 'centered-cell' },
        { field: 'siteDebugging', headerName: 'საიტის დებაგინგი', flex: 1, minWidth: 60, cellClassName: 'centered-cell' }
    ];
      
    const rows = [
        { id: 1, participant: 'სანდრო პაჭკორია', projectWriting: '✓', questionnaire: '', findProfessors: '✓', blogFilming: '✓', videoEditing: '', siteStructure: '', uiux: '', logo: '', siteBuilding: '', siteDebugging: '✓' },
        { id: 2, participant: 'ვახო ქავთარაძე', projectWriting: '', questionnaire: '', findProfessors: '', blogFilming: '', videoEditing: '', siteStructure: '✓', uiux: '', logo: '', siteBuilding: '', siteDebugging: '✓' },
        { id: 3, participant: 'საბა მაჭავარიანი', projectWriting: '✓', questionnaire: '✓', findProfessors: '', blogFilming: '', videoEditing: '', siteStructure: '✓', uiux: '', logo: '', siteBuilding: '', siteDebugging: '✓' },
        { id: 4, participant: 'ნიკოლოზ ინაძე', projectWriting: '', questionnaire: '', findProfessors: '', blogFilming: '✓', videoEditing: '✓', siteStructure: '', uiux: '', logo: '', siteBuilding: '', siteDebugging: '✓' },
        { id: 5, participant: 'ალექსანდრე მელიქჯანიანი', projectWriting: '', questionnaire: '✓', findProfessors: '', blogFilming: '', videoEditing: '', siteStructure: '✓', uiux: '', logo: '', siteBuilding: '✓', siteDebugging: '✓' },
        { id: 6, participant: 'საბა სილაგაძე', projectWriting: '', questionnaire: '', findProfessors: '', blogFilming: '', videoEditing: '', siteStructure: '', uiux: '✓', logo: '✓', siteBuilding: '', siteDebugging: '' },
        { id: 7, participant: 'დავით დიასამიძე', projectWriting: '', questionnaire: '', findProfessors: '', blogFilming: '', videoEditing: '', siteStructure: '✓', uiux: '', logo: '', siteBuilding: '✓', siteDebugging: '' },
        { id: 8, participant: 'საბა ქიტიაშვილი', projectWriting: '', questionnaire: '', findProfessors: '', blogFilming: '', videoEditing: '', siteStructure: '', uiux: '', logo: '', siteBuilding: '✓', siteDebugging: '✓' }
    ];

    return (
        <div id="about">
            <h1>ჩვენს შესახებ</h1>
            <div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    disableRowSelectionOnClick
                    sx={{
                        backgroundColor: '#f5f5f5',
                        '& .MuiDataGrid-cell': {
                            backgroundColor: '#fcfcfc',
                        },
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#efefef',
                            fontWeight: 'bold',
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default About;