import {ResponsiveBullet} from '@nivo/bullet'
import './Charts.css';

export const BulletChart = () => {
    return (
        <div className="bullet">
            <h3>Довжина екватора Землі становить 40075 км</h3>
            <h3>Волонтери Мотохелпу подолали з кров"ю:</h3>
            <div style={{height: '120px'}}>
                <ResponsiveBullet
                    data={[
                        {
                            "id": "km",
                            "ranges": [
                                2560,
                                25345,
                                31000,
                                40075
                            ],
                            "measures": [
                                32000
                            ],
                            "markers": [
                                0,
                                40075
                            ]
                        }]}
                    margin={{top: 50, right: 90, bottom: 50, left: 90}}
                    spacing={46}
                    titleAlign="start"
                    titleOffsetX={-30}
                    measureSize={0.2}
                    rangeColors="reds"
                    measureColors="set1"
                    markerColors="set1"
                />
            </div>
        </div>
    )

}