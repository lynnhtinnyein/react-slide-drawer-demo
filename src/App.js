import React, { useState } from "react";
import { AlignLeftIcon, AlignRightIcon, X } from "lucide-react";
import { SlideDrawer } from "react-slide-drawer";

const DrawerDemo = () => {
    const [showFrontLeft, setShowFrontLeft] = useState(false);
    const [showFrontRight, setShowFrontRight] = useState(false);
    const [showSlideLeft, setShowSlideLeft] = useState(false);
    const [showSlideRight, setShowSlideRight] = useState(false);

    //nested
    const [showFrontNestedLeft, setShowFrontNestedLeft] = useState(false);
    const [showFrontNestedRight, setShowFrontNestedRight] = useState(false);
    const [showSlideNestedLeft, setShowSlideNestedLeft] = useState(false);
    const [showSlideNestedRight, setShowSlideNestedRight] = useState(false);

    const DrawerContent = ({ onClose }) => (
        <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Drawer Content</h3>
                <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    onClick={onClose}
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
            <p className="text-gray-600">This is a sample drawer content.</p>
            <div className="mt-4 overflow-auto">
                <ul className="space-y-2">
                    <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Menu Item 1</li>
                    <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Menu Item 2</li>
                    <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Menu Item 3</li>
                </ul>
            </div>
        </div>
    );

    return (
        <div className="flex flex-row p-6">
            <SlideDrawer
                show={showSlideLeft}
                onClose={() => setShowSlideLeft(false)}
                position="left"
                type="slide"
                forceFullScreen
            >
                <DrawerContent onClose={() => setShowSlideLeft(false)} />
            </SlideDrawer>

            <SlideDrawer
                show={showFrontLeft}
                onClose={() => setShowFrontLeft(false)}
                position="left"
                type="front"
                zIndex={99}
                forceFullScreen
            >
                <DrawerContent onClose={() => setShowFrontLeft(false)} />
            </SlideDrawer>

            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <h1 className="text-3xl font-bold">React Slide Drawer</h1>
                    <a 
                        href="https://www.npmjs.com/package/react-slide-drawer"
                        className="font-mono text-blue-500 underline"
                        target="_blank" 
                        rel="noreferrer"
                    >
                        https://www.npmjs.com/package/react-slide-drawer
                    </a>
                </div>

                <div className="border-b p-4">
                    <h2 className="text-xl font-bold">Full Screen Demo</h2>
                </div>

                <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => setShowFrontLeft(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        <AlignLeftIcon className="h-4 w-4" />
                        Front Drawer (Left)
                    </button>

                    <button
                        onClick={() => setShowFrontRight(true)}
                        className="flex justify-end items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Front Drawer (Right)
                        <AlignRightIcon className="h-4 w-4" />
                    </button>

                    <button
                        onClick={() => setShowSlideLeft(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        <AlignLeftIcon className="h-4 w-4" />
                        Slide Drawer (Left)
                    </button>

                    <button
                        onClick={() => setShowSlideRight(true)}
                        className="flex justify-end items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Slide Drawer (Right)
                        <AlignRightIcon className="h-4 w-4" />
                    </button>
                </div>

                {/* nested */}
                <div className="bg-red-300 relative">
                    {/* nested */}
                    <div className="relative">
                        <div className="flex flex-row p-6 relative">
                            {/* Regular Drawer Demo */}
                            <SlideDrawer
                                show={showSlideNestedLeft}
                                onClose={() => setShowSlideNestedLeft(false)}
                                position="left"
                                type="slide"
                            >
                                <DrawerContent onClose={() => setShowSlideNestedLeft(false)} />
                            </SlideDrawer>

                            <SlideDrawer
                                show={showFrontNestedLeft}
                                onClose={() => setShowFrontNestedLeft(false)}
                                position="left"
                                type="front"
                            >
                                <DrawerContent onClose={() => setShowFrontNestedLeft(false)} />
                            </SlideDrawer>

                            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="border-b p-4">
                                    <h2 className="text-xl font-bold">Nested Screen Demo</h2>
                                </div>

                                <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setShowFrontNestedLeft(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        <AlignLeftIcon className="h-4 w-4" />
                                        Front Drawer (Left)
                                    </button>

                                    <button
                                        onClick={() => setShowFrontNestedRight(true)}
                                        className="flex justify-end items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Front Drawer (Right)
                                        <AlignRightIcon className="h-4 w-4" />
                                    </button>

                                    <button
                                        onClick={() => setShowSlideNestedLeft(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        <AlignLeftIcon className="h-4 w-4" />
                                        Slide Drawer (Left)
                                    </button>

                                    <button
                                        onClick={() => setShowSlideNestedRight(true)}
                                        className="flex justify-end items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                    >
                                        Slide Drawer (Right)
                                        <AlignRightIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <SlideDrawer
                                show={showSlideNestedRight}
                                onClose={() => setShowSlideNestedRight(false)}
                                position="right"
                                type="slide"
                            >
                                <DrawerContent onClose={() => setShowSlideNestedRight(false)} />
                            </SlideDrawer>

                            <SlideDrawer
                                show={showFrontNestedRight}
                                onClose={() => setShowFrontNestedRight(false)}
                                position="right"
                                type="front"
                            >
                                <DrawerContent onClose={() => setShowFrontNestedRight(false)} />
                            </SlideDrawer>
                        </div>
                    </div>
                </div>
            </div>

            <SlideDrawer
                show={showSlideRight}
                onClose={() => setShowSlideRight(false)}
                position="right"
                type="slide"
                forceFullScreen
            >
                <DrawerContent onClose={() => setShowSlideRight(false)} />
            </SlideDrawer>

            <SlideDrawer
                show={showFrontRight}
                onClose={() => setShowFrontRight(false)}
                position="right"
                type="front"
                zIndex={99}
                forceFullScreen
            >
                <DrawerContent onClose={() => setShowFrontRight(false)} />
            </SlideDrawer>
        </div>
    );
};

export default DrawerDemo;
