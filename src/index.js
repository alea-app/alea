import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumberForm from './NumberForm';
import RollModRadio from './RollModRadio';
import CheckBox from './CheckBox';
import Button from './Button';
import ShowResults from './ShowResults';



class Alea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      d20s: 1, attackMod: '', ac: '', attackCalcReady: false, hitChance: 100,
      d4s: 0, d6s: 0, d8s: 0, d10s: 0, d12s: 0, damageMod: 0, damageCalcReady: false,
      damageTotal: 0, rollMod: '', moddedHitChance: 0, moddedDamageTotal: 0, halflingLucky: false
    };
  }
  updateD20s(val) {
    let newState = Object.assign({}, this.state);
    newState.d20s = val;
    newState.attackCalcReady = false;
    newState.hitChance = 100;
    this.setState(newState);
  }
  updateAttack(val) {
    let newState = Object.assign({}, this.state);
    newState.attackMod = val;
    newState.attackCalcReady = false;
    newState.hitChance = 100;
    this.setState(newState);
  }
  updateAc(val) {
    let newState = Object.assign({}, this.state);
    newState.ac = val;
    newState.attackCalcReady = false;
    newState.hitChance = 100;
    this.setState(newState);
  }

  updateD4s(val) {
    let newState = Object.assign({}, this.state);
    newState.d4s = val;
    newState.damageCalcReady = false;
    this.setState(newState);
  }

  updateD6s(val) {
    let newState = Object.assign({}, this.state);
    newState.d6s = val;
    newState.damageCalcReady = false;
    this.setState(newState);
  }

  updateD8s(val) {
    let newState = Object.assign({}, this.state);
    newState.d8s = val;
    newState.damageCalcReady = false;
    this.setState(newState);
  }

  updateD10s(val) {
    let newState = Object.assign({}, this.state);
    newState.d10s = val;
    newState.damageCalcReady = false;
    this.setState(newState);
  }

  updateD12s(val) {
    let newState = Object.assign({}, this.state);
    newState.d12s = val;
    newState.damageCalcReady = false;
    this.setState(newState);
  }

  updateDamageMod(val) {
    let newState = Object.assign({}, this.state);
    newState.damageMod = val;
    newState.damageCalcReady = false;
    this.setState(newState);
  }

  updateRollMod(val) {
    let newState = Object.assign({}, this.state);
    newState.rollMod = val;
    this.setState(newState);
  }

  updateHalflingLucky(val) {
    let newState = Object.assign({}, this.state);
    newState.halflingLucky = val;
    this.setState(newState);
  }

  handleAttackClick() {
    let newState = Object.assign({}, this.state);
    newState.attackCalcReady = true;

    let rollNeeded = this.state.ac - this.state.attackMod;
    let successValues = 20 - rollNeeded + 1;
    let hitChance = (successValues * .05);
    let moddedHitChance = hitChance - 0.25;
    if (hitChance > .95) {
      hitChance = .95;
    }
    if (hitChance < .05) {
      hitChance = .05;
    }
    if (moddedHitChance > .95) {
      moddedHitChance = .95;
    }
    if (moddedHitChance < .05) {
      moddedHitChance = .05;
    }
    let baseHitChance = hitChance;
    let baseModdedHitChance = moddedHitChance;
    let oneChance = .05;
    const baseOneChance = .05;
    if (this.state.d20s > 1) {
      if (this.state.rollMod === "Advantage") {
        for (let i = 1; i < this.state.d20s; i++) {
          hitChance = (hitChance + baseHitChance) - (hitChance * baseHitChance);
          moddedHitChance = (moddedHitChance + baseModdedHitChance) - (moddedHitChance * baseModdedHitChance);
          oneChance = (oneChance + baseOneChance) - (oneChance * baseOneChance);
        }
      }
      if (this.state.rollMod === "Disadvantage") {
        for (let i = 1; i < this.state.d20s; i++) {
          hitChance = (hitChance * baseHitChance);
          moddedHitChance = (moddedHitChance * baseModdedHitChance);
          oneChance = (oneChance + baseOneChance) - (oneChance * baseOneChance);
        }
      }

    }
    hitChance *= 100;
    moddedHitChance *= 100;
    newState.hitChance = hitChance;
    newState.moddedHitChance = moddedHitChance;
    newState.oneChance = oneChance;

    this.setState(newState);
  }

  handleDamageClick() {
    let newState = Object.assign({}, this.state);
    newState.damageCalcReady = true;

    let total = (this.state.d4s * 2.5) + (this.state.d6s * 3.5) + (this.state.d8s * 4.5) + (this.state.d10s * 5.5) + (this.state.d12s * 6.5) + (this.state.damageMod * 1);
    let moddedTotal = total + 10;
    let hitChance = this.state.hitChance / 100.0;
    let moddedHitChance = this.state.moddedHitChance / 100.0;
    total *= hitChance;
    moddedTotal *= moddedHitChance;
    newState.damageTotal = total;
    newState.moddedDamageTotal = moddedTotal;

    this.setState(newState);
  }

  render() {
    return (
      <div className="alea">
        <header>
          <h1> Accuracy Calculation </h1>
        </header>
        <NumberForm updateAlea={this.updateD20s.bind(this)} label="Number of d20s:" />
        <RollModRadio updateAlea={this.updateRollMod.bind(this)} diceNumber={this.state.d20s} />
        <CheckBox updateAlea={this.updateHalflingLucky.bind(this)} label="Are you a lucky halfing?" />
        <NumberForm updateAlea={this.updateAttack.bind(this)} label="Attack Mod:" />
        <NumberForm updateAlea={this.updateAc.bind(this)} label="Target AC:" />
        <br></br>
        <div>
          <Button onClick={this.handleAttackClick.bind(this)} label="Calculate Attack Chance!" />
          <ShowResults showResults={this.state.attackCalcReady} results={this.state.hitChance} percentFlag={true} moddedResults={this.state.moddedHitChance} />
        </div>
        <br></br>
        <header>
          <h1> Damage Calculation </h1>
        </header>
        <div>
          <NumberForm updateAlea={this.updateD4s.bind(this)} label="D4s:" />
          <NumberForm updateAlea={this.updateD6s.bind(this)} label="D6s:" />
          <NumberForm updateAlea={this.updateD8s.bind(this)} label="D8s:" />
          <NumberForm updateAlea={this.updateD10s.bind(this)} label="D10s:" />
          <NumberForm updateAlea={this.updateD12s.bind(this)} label="D12s:" />
          <NumberForm updateAlea={this.updateDamageMod.bind(this)} label="Damage Mod:" />
        </div>
        <br></br>
        <div>
          <Button onClick={this.handleDamageClick.bind(this)} label="Calculate Average Damage!" />
          <ShowResults showResults={this.state.damageCalcReady} results={this.state.damageTotal} percentFlag={false} moddedResults={this.state.moddedDamageTotal} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Alea />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
