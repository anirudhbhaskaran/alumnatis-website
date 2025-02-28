window.onload = () => {
    document.getElementById('smFollow').addEventListener('mouseenter', () => {
        document.getElementById('smDd').classList.remove('hidden');
    })
    document.getElementById('smFollow').addEventListener('mouseleave', () => {
        document.getElementById('smDd').classList.add('hidden');
    })
    document.getElementById('services').addEventListener('mouseenter', () => {
        document.getElementById('svcDd').classList.remove('hidden');
    })
    document.getElementById('services').addEventListener('mouseleave', () => {
        document.getElementById('svcDd').classList.add('hidden');
    })
    document.getElementById('about').addEventListener('mouseenter', () => {
        document.getElementById('aDd').classList.remove('hidden');
    })
    document.getElementById('about').addEventListener('mouseleave', () => {
        document.getElementById('aDd').classList.add('hidden');
    })
    document.getElementById('mobIcons').addEventListener('click', () => {
        document.getElementById('mobIconsDd').classList.toggle('hidden');
    })
}
