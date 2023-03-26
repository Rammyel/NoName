import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p>
                <strong>T</strong> <span>:</span> +7-914-322-56-71
            </p>
            <p className="mt-2">
                <strong>F</strong> <span>:</span> +7-914-322-56-71
            </p>
            <p className="mt-2">
                <strong>E</strong> <span>:</span> <a href="0#">chekhov@n-name.ru</a>
                

                <strong>E</strong> <span>:</span> <a href="0#">razumovsky@n-name.ru</a>
            </p>
        </div>
    );
}

export default ContentFooter;