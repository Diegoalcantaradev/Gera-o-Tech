

import pyautogui

pyautogui.keyDown('alt')
pyautogui.press('tab')
pyautogui.keyUp('alt')
pyautogui.click('1.png', duration=2)

pyautogui.move(200,0, duration=2)

pyautogui.click(duration=2)
pyautogui.keyDown('alt')
pyautogui.press('tab')
pyautogui.keyUp('alt')
pyautogui.click('2.png', duration=2)

