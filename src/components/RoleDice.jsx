import styled from 'styled-components';

const RoleDice = ({ roleDice, currrentDice }) => {

    return (
        <DiceContainer>
            <div className='dice' onClick={roleDice}>
                <img src={`/images/dice/dice_${currrentDice}.png`} alt="dice image" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    p{
        font-size: 24px;
    }

    .dice{
        cursor: pointer;

    }
`;