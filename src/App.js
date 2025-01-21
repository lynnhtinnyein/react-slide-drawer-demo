import { useState } from "react";
import { SlideDrawer } from "react-slide-drawer";

const App = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleClose = () => {
        setShowDrawer(false);
    };

    return (
        <div>
            <button onClick={() => setShowDrawer(prev => !prev)}>Open Drawer</button>

            <SlideDrawer
                show={showDrawer}
                onClose={handleClose}
                width={250}
                position="left"
                type="front"
                animated={true}
            >
                <div
                    style={{
                        display: "flex",
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: 'red'
                    }}
                >
                    This is the content inside the drawer!
                </div>
            </SlideDrawer>
        </div>
    );
};

export default App;