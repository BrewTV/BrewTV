function injectBitsButton() {
    if (!document.querySelector('[data-a-target="top-nav-get-bits-button"]')) {
        const buttonHTML = `
        <div style="display: inherit;" data-test-selector="toggle-balloon-wrapper__mouse-enter-detector">
            <div class="InjectLayout-sc-1i43xsx-0 kBtJDm">
                <button class="ScCoreButton-sc-ocjdkq-0 ljgEdo ScButtonIcon-sc-9yap0r-0 eSFFfM" aria-label="Get Bits" data-a-target="top-nav-get-bits-button">
                    <div class="ButtonIconFigure-sc-1emm8lf-0 buvMbr">
                        <div class="ScIconLayout-sc-1q25cff-0 cASLMj">
                            <img src="https://path-to-your-image/icon.png" alt="Get Bits" style="width: 20px; height: 20px;">
                        </div>
                    </div>
                </button>
            </div>
        </div>
        `;

        const wrapper = document.createElement('div');
        wrapper.innerHTML = buttonHTML;

        // Inject the HTML into the navbar (target a suitable element in the navbar)
        const navbar = document.querySelector('.top-nav__menu'); // Update selector as needed
        if (navbar) {
            navbar.appendChild(wrapper);
            console.log('Bits Button Injected into Navbar');

            // Add event listener to open a popup when the button is clicked
            const button = document.querySelector('[data-a-target="top-nav-get-bits-button"]');
            button.addEventListener('click', openCustomizationPopup);
        } else {
            console.log('Navbar not found.');
        }
    }
}

function openCustomizationPopup() {
    const popupOverlay = document.createElement('div');
    popupOverlay.style.position = 'fixed';
    popupOverlay.style.top = '0';
    popupOverlay.style.left = '0';
    popupOverlay.style.width = '100%';
    popupOverlay.style.height = '100%';
    popupOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    popupOverlay.style.zIndex = '10000';
    popupOverlay.style.display = 'flex';
    popupOverlay.style.justifyContent = 'center';
    popupOverlay.style.alignItems = 'center';
    popupOverlay.style.backdropFilter = 'blur(10px)';

    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = '#18181B';
    popupContent.style.color = '#FFFFFF';
    popupContent.style.padding = '30px';
    popupContent.style.borderRadius = '12px';
    popupContent.style.boxShadow = '0 8px 16px rgba(0,0,0,0.5)';
    popupContent.style.maxWidth = '600px';
    popupContent.style.width = '100%';
    popupContent.style.textAlign = 'center';
    popupContent.style.fontFamily = 'Arial, sans-serif';

    popupContent.innerHTML = `
        <h2 style="color: #9147ff;">Customize Your Twitch Experience</h2>
        <label style="display: block; margin: 20px 0;">
            <input type="checkbox" id="darkModeToggle" style="margin-right: 10px;"> Dark Mode
        </label>
        <label style="display: block; margin: 20px 0;">
            <input type="checkbox" id="hideSidebarToggle" style="margin-right: 10px;"> Hide Sidebar
        </label>
        <button id="saveSettings" style="background-color: #9147ff; color: #FFFFFF; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">Save</button>
        <button id="closePopup" style="background-color: transparent; color: #FFFFFF; border: 2px solid #9147ff; padding: 10px 20px; border-radius: 8px; cursor: pointer; margin-left: 10px;">Close</button>
    `;

    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    document.getElementById('saveSettings').addEventListener('click', () => {
        alert('Settings Saved!');
        closePopup();
    });

    document.getElementById('closePopup').addEventListener('click', closePopup);
}

function closePopup() {
    const popupOverlay = document.querySelector('div[style*="position: fixed"][style*="top: 0"]');
    if (popupOverlay) {
        popupOverlay.remove();
    }
}

window.addEventListener('load', () => {
    removeAdFreeButton();
    injectBitsButton();
});

const observer = new MutationObserver(() => {
    injectBitsButton();
});

observer.observe(document.body, { childList: true, subtree: true });
