import React from "react";


export default function Footer() {
    const footerStyles = {
        // backgroundColor: "#fff9fa",
        fontSize: "14px",
        color: "#123123",
        padding: "2px",
        width: "100%",
        position: "fixed",
        bottom: 0
    };

    return (
        <footer style={footerStyles}>
            <div>
                <div>
                    <p>Copyright &copy; Frontangle.com</p>
                </div>
            </div>
        </footer>
    );
}
