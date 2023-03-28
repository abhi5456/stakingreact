import './App.css';
import ValidatorInfo from './ValidatorInfo';
import StakingBlock from './StakingBlock';

function App() {
  return (
    <div className="App">
      <div className="column justify-content-center align-items-center">
        <ValidatorInfo validatorAddress="one1v0n7nw6c4fe88xnuasr0d65luult0fvclvvxmf" />
        <StakingBlock validatorAddress="one1v0n7nw6c4fe88xnuasr0d65luult0fvclvvxmf" />
      </div>
    </div>
  );
}

export default App;
