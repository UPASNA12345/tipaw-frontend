
import { Container } from './comonents/Styles/Container.styled';
import { GlobalStyles } from './comonents/Styles/Global';

import Form from './comonents/Form/Form';

function App() {

  return (
    <div className="App">

      <GlobalStyles />
      <Container>
        <Form />
      </Container>


    </div>
  );
}

export default App;
