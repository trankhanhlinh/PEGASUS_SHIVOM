import * as React from 'react'
import './404-not-found.scss'

export class NotFound extends React.Component {
    constructor(pros) {
        super(pros)
    }

    render() {
        return (
            <div>
                <div className="content">
                    <div>
                        <img src="img/error-404.png" alt="404 not found" />
                    </div>
                    <div>
                        <span>Xin lỗi, trang bạn yêu cầu hiện không tìm thấy</span>
                        <div className="btns">
                            <button type="button">Trang chủ</button>
                            <button type="button">Liên hệ</button>
                        </div>
                    </div>
                    <span id="pegasus">Designed by Pegasus</span>
                </div>
                
            </div>
        )
    }
}