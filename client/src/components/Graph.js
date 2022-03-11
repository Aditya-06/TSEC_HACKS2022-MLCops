import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Graph from 'react-graph-vis';
import axios from 'axios';
import { CompressOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { data } from 'vis-network';

// import './styles.css';
// import './network.css';

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
};

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  return `#${red}${green}${blue}`;
}

function GraphPage() {
  // const [data, setData] = useState(JSON.parse(localStorage.getItem('rPaper')));

  const history = useHistory();
  const createNode = (x, y) => {
    const color = randomColor();
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      const from = Math.floor(Math.random() * (counter - 1)) + 1;
      return {
        graph: {
          nodes: [...nodes, { id, label: `Node ${id}`, color, x, y }],
          edges: [...edges, { from, to: id }],
        },
        counter: id,
        ...rest,
      };
    });
  };

  const getname = (arr, id) => {
    for (let i = 0; i < arr.length; i += 1) {
      // eslint-disable-next-line no-debugger
      if (arr[i].id == id) {
        return arr[i].label;
      }
    }
  };

  const [state, setState] = useState({
    counter: 5,

    graph: {
      nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
      ],
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log('Selected nodes:');
        console.log(nodes);
        console.log('Selected edges:');
        console.log(edges);
        // alert('Selected node: ' + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      },
    },
  });

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('rPaper')).authors.toString();
    let data = JSON.stringify({
      author: `${auth.split(',')[0]}`,
      // author: data.author,
      // author: 'Mehta Bhairav',
    });

    let config = {
      method: 'post',
      url: '/workflow/graph/',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        const data = response.data;
        console.log(JSON.stringify(response.data));
        console.log(data);
        // eslint-disable-next-line no-debugger
        setState({
          counter: data.details.nodes.length,

          graph: {
            nodes: data.details.nodes,
            edges: data.details.edges,
          },
          events: {
            select: ({ nodes, edges }) => {
              // alert('Selected node: ' + getname(data.details.nodes, nodes));
              localStorage.setItem(
                'author',
                getname(data.details.nodes, nodes)
              );
              history.push('/author');
            },
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { graph, events } = state;
  return (
    <div>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: '50vh' }}
      />
    </div>
  );
}

export default GraphPage;
