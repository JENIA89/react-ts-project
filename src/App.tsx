import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div >
      <Card variant={CardVariant.outlined} width='200px' height='200px'>
        <button>button</button>
      </Card>
    </div>
  );
}

export default App;
