const appStyle = {
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
};

const baseStyle = {
    flex: 1,
};

const textButtonStyle = {
    background: 'none',
    border: 'none',
};

const formInputStyle = {
    display: 'block',
    margin: '10px 0',
};

const tableStyle = {
    border: '1px solid #aaa',
    borderRadius: 3,
    borderSpacing: 0,
    marginTop: '20px',
    flex: 0.5,
    clear: 'both',
};

const tableCellStyle = {
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    padding: '5px 10px',
};

const tableCellLastChildStyle = {
    ...tableCellStyle,
    borderRight: 'none',
}

const tableHeaderStyle = {
    borderRight: '1px solid #aaa',
    borderBottom: '1px solid #aaa',
    borderTop: 'none',
};

const tableHeaderLastChildStyle = {
    ...tableCellLastChildStyle,
    borderBottom: '1px solid #aaa',
    borderTop: 'none',
};

const oddRow = {
    background: 'none',
};

const evenRow = {
    background: '#f6f6f6',
};

export default {
    appStyle,
    baseStyle,
    formInputStyle,
    oddRow,
    evenRow,
    tableStyle,
    tableCellStyle,
    tableCellLastChildStyle,
    tableHeaderStyle,
    tableHeaderLastChildStyle,
    textButtonStyle,
};
