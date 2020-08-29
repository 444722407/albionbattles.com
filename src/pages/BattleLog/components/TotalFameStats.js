import React from 'react'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import Panel from 'rsuite/lib/Panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { getBattle } from '../../../reducers/battleReducer'
import TotalBar from './TotalBar'

const TotalFameStats = () => {
    const { alliances: a } = useSelector(getBattle)
    const alliances = [...a.alliances].sort((a,b) => b.killFame-a.killFame)
    const top = alliances[0]
    return (
        <Panel
            header={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Most Fame</p>
                <FontAwesomeIcon
                    style={{ minWidth: 25 }}
                    icon={faCrown}
                    color="#29e09d"
                    size="lg"
                />
            </div>}
            style={{
                minHeight: 190,
                backgroundColor: "#0f131a",
            }}
        >
            {alliances.sort((a, b) => b.killFame - a.killFame).slice(0, 4).map(a => (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={a.name}>
                    <TotalBar
                        a={a.killFame}
                        t={top.killFame}
                        background="linear-gradient(90deg, rgba(41,224,157,1) 0%, rgba(41,224,130,1) 100%)"
                    />
                    <p style={{ color: "#AAA" }}>{a.name !== "" ? a.name : "Unalligned"}</p>
                </div>
            ))}
        </Panel>
    )
}

export default TotalFameStats