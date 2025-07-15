let content = document.querySelector('.content')
let contentTitle = document.querySelector('#title')
let contentDescription = document.querySelector('#desc')

console.log(0, content, 1, contentTitle, 2, contentDescription)

let motherboard_info = {
    1: {'name': 'Keyboard and mouse', 
        'description': 'There are mainly 2 types of mouse and keyboard connectors. The first connector is known as PS/2 & the second connector is known as USB.'
    },
    2: {'name': ' Universal Serial Bus (USB)',
        'description': `The USB port is used for connecting the computer system. In the computer system, 
there is various type of devices that are connected with the USB port like keyboard, 
mouse, camera, scanner, printers, and another device. The main use of a USB port 
is to connect the peripheral devices and computer motherboards. The peripheral 
device connected to the computer system can be inserted or remove without system 
restarts that can be the main advantage of a USB port. `
    },
    3: {'name': 'Parallel port ',
        'description': `
        The old printers that are used in past use the parallel port to connect with the 
computer system. In the parallel port, multiple wires are used to send or receive 
multiple bits of the data in a single instance. On the other hand, serial ports use 
only one wire at a time.  In the parallel port, 25 pins female DB type connector is 
used.
        `
    },
    4: {'name': 'CPU chip', 
        'description': `
        The central processing unit is the processor that controls all the functions of the 
computer system. The overall flow of task and functions are controlled by the 
central processing unit. For the computer system, the central processing unit is 
called the brain of the computer system. 
        `
    },
    5: {
        'name': 'RAM slots',
        'description': `
        The RAM slots are used for connecting the RAM (memory) in the computer system. 
In the general computer system, there are mainly two RAM slots but sometimes 
there can be four-plus slots in the motherboard to increase the memory of the 
computer system. 
        `
    },
    6: {
        'name': ' Floppy Controller',
        'description': `
        The older motherboard chip contains a 34-pin type ribbon cable for connecting the 
computer system with a floppy drive. In this ribbon cable, one end is directly 
connected with the computer system and one end is connected with the 
motherboard. 
        `
    },
    7: {
        'name': 'IDE controller',
        'description': `
        The integrated drive electronics are also known as ATA or Parallel ATA. The IDE is 
the type of component that issued for hard drive control. In today’s computer 
system, the IDE controller supports is not supported.
        `
    },
    8: {
        'name': 'PCI Slot',
        'description': `
        The full form of PCI is a peripheral component interface. The PCI slot is mainly 
used to insert the expansion cards on the computer. The other PCI devices can also 
be connected like a sound card, network card, video, card, modems, and other 
device3s. In today’s computer system support for PCI expansion slots are not there. 
        `
    },
    9: {
        'name': 'ISA Slot',
        'description': `
        Industry-standard architecture (ISA) is defined as standard architecture for 
expansion bus. The ISA slot issued for connecting input devices and modems. `
    },
    10: {
        'name': 'CMOS Battery',
        'description': `
        The CMOS battery is used for storing the BIOS settings on the motherboard. The 
CMOS battery is also capable of storing the time and data in it. 
        `
    },
    11: {
        'name': 'AGP Slot',
        'description': `
        AGP (Accelerated Graphics slot) is a type of computer slot that is used for attaching 
the video card to the system. This slot is a high-speed slot so that data transfer can 
be done at high speed. 
        `
    },
    12: {
        'name': 'CPU Slot',
        'description': `
        The CPU slot is a type of port that is used to connect the central processing unit to 
the motherboard of the computer system.`
    },
    13: {
        'name': 'Power Supply Slot',
        'description': `
        The power supply slot is used for providing the electric supply to the computer 
system so that it can start and perform its functions. The total power supply given 
to the system is around 110 ac power. In the power supply type connector, there 
are a total of 20-pins that are used to maintain the power supply to the computer 
system. 
        `
    },
    14: {
        'name': 'BIOS',
        'description': 'This is a component that is responsable for booting up your computer and Operating System.'
    }
}

function showContent(id){

    contentTitle.textContent = motherboard_info[id].name
    contentDescription.textContent = motherboard_info[id].description

    // display content
    content.style.display = 'block';
}

function hideContent(){
    contentTitle.textContent = ''
    contentDescription.textContent = ''

    // display content
    content.style.display = 'none';
}
