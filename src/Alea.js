import React from 'react';
import './index.css';
import NumberForm from './NumberForm';
import RollModRadio from './RollModRadio';
import CheckBox from './CheckBox';
import Button from './Button';
import ShowResults from './ShowResults';
import Chart from './Chart';
import DropDown from './Dropdown';



class Alea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            d20s: 1, attackMod: '', ac: '', attackCalcReady: false, hitChance: 100,
            d4s: 0, d6s: 0, d8s: 0, d10s: 0, d12s: 0, damageMod: 0, damageCalcReady: false,
            damageTotal: 0, rollMod: '', moddedHitChance: 0, moddedDamageTotal: 0, halflingLucky: false, showChart: false,
            dataPoints: [], moddedDataPoints: [], showDropdown: true, system: []
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

    updateSystem(val) {
        let newState = Object.assign({}, this.state);
        newState.system = val;
        this.setState(newState);
    }

    handleAttackClick() {
        let newState = Object.assign({}, this.state);
        newState.attackCalcReady = true;
        let attackOdds = this.calculateAttack(this.state.ac, this.state.attackMod, this.state.d20s, this.state.rollMod, this.state.halflingLucky);
        newState.hitChance = attackOdds[0];
        newState.moddedHitChance = attackOdds[1];

        this.setState(newState);
    }

    handleDamageClick() {
        let totals = this.calculateDamage(this.state.hitChance, this.state.moddedHitChance);
        let newState = Object.assign({}, this.state);
        newState.damageCalcReady = true;
        newState.damageTotal = totals[0];
        newState.moddedDamageTotal = totals[1];
        this.setState(newState);
    }

    calculateDamage(hitChance, moddedHitChance) {
        let total = (this.state.d4s * 2.5) + (this.state.d6s * 3.5) + (this.state.d8s * 4.5) + (this.state.d10s * 5.5) + (this.state.d12s * 6.5) + (this.state.damageMod * 1);
        let moddedTotal = total + 10;
        hitChance = hitChance / 100.0;
        moddedHitChance = moddedHitChance / 100.0;
        total *= hitChance;
        moddedTotal *= moddedHitChance;
        let totals = [];
        totals[0] = total;
        totals[1] = moddedTotal;
        return totals;
    }

    handleChartClick() {
        let newState = Object.assign({}, this.state);
        let chartData = this.calculateChartData();
        newState.dataPoints = chartData.dataPoints;
        newState.moddedDataPoints = chartData.moddedDataPoints;
        newState.showChart = true;
        this.setState(newState);
    }

    calculateChartData() {
        let dataPoints = [];
        let moddedDataPoints = [];
        let chartData = { dataPoints, moddedDataPoints }
        for (let i = 0; i < 31; i++) {
            let accuracy = this.calculateAttack(i, this.state.attackMod, this.state.d20s, this.state.rollMod, this.state.halflingLucky);
            let damage = this.calculateDamage(accuracy[0], accuracy[1]);
            dataPoints.push({ y: damage[0], x: i });
            moddedDataPoints.push({ y: damage[1], x: i })
        }
        return chartData;
    }

    calculateAttack(ac, attackMod, d20s, rollMod, halflingLucky) {
        let rollNeeded = ac - attackMod;
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
        const baseHitChance = hitChance;
        const baseModdedHitChance = moddedHitChance;
        const baseOneChance = .05;
        let oneChance = .05;
        if (d20s > 1) {
            if (rollMod === "Advantage") {
                for (let i = 1; i < d20s; i++) {
                    hitChance = (hitChance + baseHitChance) - (hitChance * baseHitChance);
                    moddedHitChance = (moddedHitChance + baseModdedHitChance) - (moddedHitChance * baseModdedHitChance);
                    oneChance = (oneChance + baseOneChance) - (oneChance * baseOneChance);
                }
                if (halflingLucky) {
                    let extraHitChance = (hitChance + baseHitChance) - (hitChance * baseHitChance);
                    let extraModdedHitChance = (moddedHitChance + baseModdedHitChance) - (moddedHitChance * baseModdedHitChance);
                    extraHitChance = (extraHitChance - hitChance) * oneChance;
                    extraModdedHitChance = (extraModdedHitChance - moddedHitChance) * oneChance;
                    hitChance += extraHitChance;
                    moddedHitChance += extraModdedHitChance;
                }
            }
            if (rollMod === "Disadvantage") {
                for (let i = 1; i < d20s; i++) {
                    hitChance = (hitChance * baseHitChance);
                    moddedHitChance = (moddedHitChance * baseModdedHitChance);
                    oneChance = (oneChance + baseOneChance) - (oneChance * baseOneChance);
                }
                if (halflingLucky) {
                    let extraHitChance = ((hitChance * baseHitChance) + (hitChance * baseHitChance)) - (hitChance * baseHitChance * hitChance * baseHitChance);
                    let extraModdedHitChance = ((moddedHitChance * baseModdedHitChance) + (moddedHitChance * baseModdedHitChance) - (moddedHitChance * baseModdedHitChance * moddedHitChance * baseModdedHitChance));
                    extraHitChance = (extraHitChance - hitChance) * oneChance;
                    extraModdedHitChance = (extraModdedHitChance - moddedHitChance) * oneChance;
                    hitChance += extraHitChance;
                    moddedHitChance += extraModdedHitChance;
                }
            }
        } else {
            if (halflingLucky) {
                let extraHitChance = (hitChance + baseHitChance) - (hitChance * baseHitChance);
                let extraModdedHitChance = (moddedHitChance + baseModdedHitChance) - (moddedHitChance * baseModdedHitChance);
                extraHitChance = (extraHitChance - hitChance) * oneChance;
                extraModdedHitChance = (extraModdedHitChance - moddedHitChance) * oneChance;
                hitChance += extraHitChance;
                moddedHitChance += extraModdedHitChance;
            }
        }
        hitChance *= 100;
        moddedHitChance *= 100;
        let attackOdds = [hitChance, moddedHitChance]
        return attackOdds;
    }


    render() {
        if (this.state.system == "DnD5e") {
            return (
                <div className="alea">
                    <Button onClick={this.updateSystem.bind(this)} label="Change System" />
                    <header>
                        <h1> Accuracy Calculation </h1>
                    </header>
                    <NumberForm updateAlea={this.updateD20s.bind(this)} label="Number of d20s:" />
                    <RollModRadio updateAlea={this.updateRollMod.bind(this)} diceNumber={this.state.d20s} />
                    <CheckBox updateAlea={this.updateHalflingLucky.bind(this)} label="Reroll a natural 1 once?" />
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
                    <div>
                        <Button onClick={this.handleChartClick.bind(this)} label="Calculate Chart"></Button>
                        <Chart title="Damage/AC Correlation " showChart={this.state.showChart} dataPoints={this.state.dataPoints} moddedDataPoints={this.state.moddedDataPoints}></Chart>
                    </div>
                </div>
            )
        }
        else if (this.state.system == "PF2E") {
            return <div className="alea">
                <Button onClick={this.updateSystem.bind(this)} label="Change System" />
            </div>
        }
        else {
            return <div className="alea">
                <h1> Select A System </h1>

                <DropDown values={['DnD5e', 'PF2E']} updateAlea={this.updateSystem.bind(this)} />
            </div>
        }
    }
}

export default Alea;