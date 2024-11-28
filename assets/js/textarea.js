let activeButton = null;

        function handleButtonClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionShow(action);
        }

        function showSectionShow(action) {
            document.getElementById('html-container').style.display = 'none';
            document.getElementById('css-container').style.display = 'none';
            document.getElementById('js-container').style.display = 'none';
            document.getElementById('result').style.display = 'none';

            if (action === 'html') {
                document.getElementById('html-container').style.display = 'flex';
                updateLineNumbers('html');
            } else if (action === 'css') {
                document.getElementById('css-container').style.display = 'flex';
                updateLineNumbers('css');
            } else if (action === 'js') {
                document.getElementById('js-container').style.display = 'flex';
                updateLineNumbers('js');
            } else if (action === 'result') {
                const html = document.getElementById('html-code').value;
                const css = `<style>${document.getElementById('css-code').value}</style>`;
                const js = `<script>${document.getElementById('js-code').value}<\/script>`;

                const output = document.getElementById('output-frame').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result').style.display = 'block';
            }
        }

        function updateLineNumbers(type) {
            const textarea = document.getElementById(`${type}-code`);
            const lineNumbers = document.getElementById(`${type}-lines`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }

            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        function handleAutoClose(event) {
            const textarea = event.target;
            const cursorPosition = textarea.selectionStart;
            const value = textarea.value;

            const char = value[cursorPosition - 1];
            let closeChar = '';

            switch (char) {
                case '<':
                    closeChar = '>';
                    break;
                case '{':
                    closeChar = '}';
                    break;
                case '(':
                    closeChar = ')';
                    break;
                case '[':
                    closeChar = ']';
                    break;
                case '"':
                    closeChar = '"';
                    break;
                case "'":
                    closeChar = "'";
                    break;
            }

            if (closeChar) {
                textarea.value = value.substring(0, cursorPosition) + closeChar + value.substring(cursorPosition);
                textarea.selectionStart = textarea.selectionEnd = cursorPosition; // Move cursor back inside
            }
        }

        function handleKeydown(event) {
            const textarea = event.target;

            // Handle Tab key to indent or move to next field
            if (event.key === "Tab") {
                event.preventDefault(); // Prevent default tab behavior
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;

                // Insert tab character at the cursor position
                textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 1; // Move cursor after the tab
            }

            // Handle Delete key to remove the selected text or delete the character
            if (event.key === "Delete") {
                // You can adjust behavior here if you want specific delete actions
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbers('html');
        });
// 2
        function handleButtonShowClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSection(action);
        }

        function handleButtonShowClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSection(action);
        }

        function showSection(action) {
            document.getElementById('html-container-show').style.display = 'none';
            document.getElementById('css-container-show').style.display = 'none';
            document.getElementById('js-container-show').style.display = 'none';
            document.getElementById('result-show').style.display = 'none';

            if (action === 'html-show') {
                document.getElementById('html-container-show').style.display = 'flex';
                updateLineNumbersShow('html');
            } else if (action === 'css-show') {
                document.getElementById('css-container-show').style.display = 'flex';
                updateLineNumbersShow('css');
            } else if (action === 'js-show') {
                document.getElementById('js-container-show').style.display = 'flex';
                updateLineNumbersShow('js');
            } else if (action === 'result-show') {
                const html = document.getElementById('html-code-show').value;
                const css = `<style>${document.getElementById('css-code-show').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show').value}<\/script>`;

                const output = document.getElementById('output-frame-show').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show').style.display = 'block';
            }
        }

        function updateLineNumbersShow(type) {
            const textarea = document.getElementById(`${type}-code-show`);
            const lineNumbers = document.getElementById(`${type}-lines-show`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShow('html');
            updateLineNumbersShow('css');
            updateLineNumbersShow('js');
        });
// 3
        function handleButtonShowTwoClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionTwo(action);
        }

        function showSectionTwo(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-two').style.display = 'none';
            document.getElementById('css-container-show-two').style.display = 'none';
            document.getElementById('js-container-show-two').style.display = 'none';
            document.getElementById('result-show-two').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-two') {
                document.getElementById('html-container-show-two').style.display = 'flex';
                updateLineNumbersShowTwo('html');
            } else if (action === 'css-show-two') {
                document.getElementById('css-container-show-two').style.display = 'flex';
                updateLineNumbersShowTwo('css');
            } else if (action === 'js-show-two') {
                document.getElementById('js-container-show-two').style.display = 'flex';
                updateLineNumbersShowTwo('js');
            } else if (action === 'result-show-two') {
                const html = document.getElementById('html-code-show-two').value;
                const css = `<style>${document.getElementById('css-code-show-two').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-two').value}<\/script>`;

                const output = document.getElementById('output-frame-show-two').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-two').style.display = 'block';
            }
        }

        function updateLineNumbersShowTwo(type) {
            const textarea = document.getElementById(`${type}-code-show-two`);
            const lineNumbers = document.getElementById(`${type}-lines-show-two`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowTwo('html');
            updateLineNumbersShowTwo('css');
            updateLineNumbersShowTwo('js');
        });
// 4
        function handleButtonShowFourClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionFour(action);
        }

        function showSectionFour(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-four').style.display = 'none';
            document.getElementById('css-container-show-four').style.display = 'none';
            document.getElementById('js-container-show-four').style.display = 'none';
            document.getElementById('result-show-four').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-four') {
                document.getElementById('html-container-show-four').style.display = 'flex';
                updateLineNumbersShowFour('html');
            } else if (action === 'css-show-four') {
                document.getElementById('css-container-show-four').style.display = 'flex';
                updateLineNumbersShowFour('css');
            } else if (action === 'js-show-four') {
                document.getElementById('js-container-show-four').style.display = 'flex';
                updateLineNumbersShowFour('js');
            } else if (action === 'result-show-four') {
                const html = document.getElementById('html-code-show-four').value;
                const css = `<style>${document.getElementById('css-code-show-four').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-four').value}<\/script>`;

                const output = document.getElementById('output-frame-show-four').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-four').style.display = 'block';
            }
        }

        function updateLineNumbersShowFour(type) {
            const textarea = document.getElementById(`${type}-code-show-four`);
            const lineNumbers = document.getElementById(`${type}-lines-show-four`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowFour('html');
            updateLineNumbersShowFour('css');
            updateLineNumbersShowFour('js');
        });
// 5
        function handleButtonShowFiveClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionFive(action);
        }

        function showSectionFive(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-five').style.display = 'none';
            document.getElementById('css-container-show-five').style.display = 'none';
            document.getElementById('js-container-show-five').style.display = 'none';
            document.getElementById('result-show-five').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-five') {
                document.getElementById('html-container-show-five').style.display = 'flex';
                updateLineNumbersShowFive('html');
            } else if (action === 'css-show-five') {
                document.getElementById('css-container-show-five').style.display = 'flex';
                updateLineNumbersShowFive('css');
            } else if (action === 'js-show-five') {
                document.getElementById('js-container-show-five').style.display = 'flex';
                updateLineNumbersShowFive('js');
            } else if (action === 'result-show-five') {
                const html = document.getElementById('html-code-show-five').value;
                const css = `<style>${document.getElementById('css-code-show-five').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-five').value}<\/script>`;

                const output = document.getElementById('output-frame-show-five').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-five').style.display = 'block';
            }
        }

        function updateLineNumbersShowFive(type) {
            const textarea = document.getElementById(`${type}-code-show-five`);
            const lineNumbers = document.getElementById(`${type}-lines-show-five`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowFive('html');
            updateLineNumbersShowFive('css');
            updateLineNumbersShowFive('js');
        });
// 6
        function handleButtonShowSixClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionSix(action);
        }

        function showSectionSix(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-six').style.display = 'none';
            document.getElementById('css-container-show-six').style.display = 'none';
            document.getElementById('js-container-show-six').style.display = 'none';
            document.getElementById('result-show-six').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-six') {
                document.getElementById('html-container-show-six').style.display = 'flex';
                updateLineNumbersShowSix('html');
            } else if (action === 'css-show-six') {
                document.getElementById('css-container-show-six').style.display = 'flex';
                updateLineNumbersShowSix('css');
            } else if (action === 'js-show-six') {
                document.getElementById('js-container-show-six').style.display = 'flex';
                updateLineNumbersShowSix('js');
            } else if (action === 'result-show-six') {
                const html = document.getElementById('html-code-show-six').value;
                const css = `<style>${document.getElementById('css-code-show-six').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-six').value}<\/script>`;

                const output = document.getElementById('output-frame-show-six').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-six').style.display = 'block';
            }
        }

        function updateLineNumbersShowSix(type) {
            const textarea = document.getElementById(`${type}-code-show-six`);
            const lineNumbers = document.getElementById(`${type}-lines-show-six`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowSix('html');
            updateLineNumbersShowSix('css');
            updateLineNumbersShowSix('js');
        });
// 7
        function handleButtonShowSevenClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionSeven(action);
        }

        function showSectionSeven(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-seven').style.display = 'none';
            document.getElementById('css-container-show-seven').style.display = 'none';
            document.getElementById('js-container-show-seven').style.display = 'none';
            document.getElementById('result-show-seven').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-seven') {
                document.getElementById('html-container-show-seven').style.display = 'flex';
                updateLineNumbersShowSeven('html');
            } else if (action === 'css-show-seven') {
                document.getElementById('css-container-show-seven').style.display = 'flex';
                updateLineNumbersShowSeven('css');
            } else if (action === 'js-show-seven') {
                document.getElementById('js-container-show-seven').style.display = 'flex';
                updateLineNumbersShowSeven('js');
            } else if (action === 'result-show-seven') {
                const html = document.getElementById('html-code-show-seven').value;
                const css = `<style>${document.getElementById('css-code-show-seven').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-seven').value}<\/script>`;

                const output = document.getElementById('output-frame-show-seven').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-seven').style.display = 'block';
            }
        }

        function updateLineNumbersShowSeven(type) {
            const textarea = document.getElementById(`${type}-code-show-seven`);
            const lineNumbers = document.getElementById(`${type}-lines-show-seven`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowSeven('html');
            updateLineNumbersShowSeven('css');
            updateLineNumbersShowSeven('js');
        });
// 8
        function handleButtonShowEightClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionEight(action);
        }

        function showSectionEight(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-eight').style.display = 'none';
            document.getElementById('css-container-show-eight').style.display = 'none';
            document.getElementById('js-container-show-eight').style.display = 'none';
            document.getElementById('result-show-eight').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-eight') {
                document.getElementById('html-container-show-eight').style.display = 'flex';
                updateLineNumbersShowEight('html');
            } else if (action === 'css-show-eight') {
                document.getElementById('css-container-show-eight').style.display = 'flex';
                updateLineNumbersShowEight('css');
            } else if (action === 'js-show-eight') {
                document.getElementById('js-container-show-eight').style.display = 'flex';
                updateLineNumbersShowEight('js');
            } else if (action === 'result-show-eight') {
                const html = document.getElementById('html-code-show-eight').value;
                const css = `<style>${document.getElementById('css-code-show-eight').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-eight').value}<\/script>`;

                const output = document.getElementById('output-frame-show-eight').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-eight').style.display = 'block';
            }
        }

        function updateLineNumbersShowEight(type) {
            const textarea = document.getElementById(`${type}-code-show-eight`);
            const lineNumbers = document.getElementById(`${type}-lines-show-eight`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowEight('html');
            updateLineNumbersShowEight('css');
            updateLineNumbersShowEight('js');
        });
// 9
        function handleButtonShowNineClick(button, action) {
            if (activeButton) {
                activeButton.classList.remove('active-btn');
            }

            const ripple = document.createElement('span');
            ripple.classList.add('highlight');
            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            button.classList.add('active-btn');
            activeButton = button;

            showSectionNine(action);
        }

        function showSectionNine(action) {
            // Hide all sections initially
            document.getElementById('html-container-show-nine').style.display = 'none';
            document.getElementById('css-container-show-nine').style.display = 'none';
            document.getElementById('js-container-show-nine').style.display = 'none';
            document.getElementById('result-show-nine').style.display = 'none';

            // Show the relevant section based on action
            if (action === 'html-show-nine') {
                document.getElementById('html-container-show-nine').style.display = 'flex';
                updateLineNumbersShowNine('html');
            } else if (action === 'css-show-nine') {
                document.getElementById('css-container-show-nine').style.display = 'flex';
                updateLineNumbersShowNine('css');
            } else if (action === 'js-show-nine') {
                document.getElementById('js-container-show-nine').style.display = 'flex';
                updateLineNumbersShowNine('js');
            } else if (action === 'result-show-nine') {
                const html = document.getElementById('html-code-show-nine').value;
                const css = `<style>${document.getElementById('css-code-show-nine').value}</style>`;
                const js = `<script>${document.getElementById('js-code-show-nine').value}<\/script>`;

                const output = document.getElementById('output-frame-show-nine').contentWindow.document;
                output.open();
                output.write(html + css + js);
                output.close();

                document.getElementById('result-show-nine').style.display = 'block';
            }
        }

        function updateLineNumbersShowNine(type) {
            const textarea = document.getElementById(`${type}-code-show-nine`);
            const lineNumbers = document.getElementById(`${type}-lines-show-nine`);
            const lineCount = textarea.value.split('\n').length;

            lineNumbers.innerHTML = '';
            for (let i = 1; i <= lineCount; i++) {
                lineNumbers.innerHTML += `${i}<br>`;
            }
            textarea.addEventListener('input', handleAutoClose);
            textarea.addEventListener('keydown', handleKeydown);
        }

        // Initialize line numbers when DOM is ready
        document.addEventListener("DOMContentLoaded", () => {
            updateLineNumbersShowNine('html');
            updateLineNumbersShowNine('css');
            updateLineNumbersShowNine('js');
        });