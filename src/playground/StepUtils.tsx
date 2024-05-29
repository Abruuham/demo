import { Uid } from 'sequential';
import { SwitchStep, TaskStep, IconStep, ContainerStep} from './model';

export function createTaskStep(name: string): TaskStep {
	return {
		id: Uid.next(),
		componentType: 'task',
		type: 'task',
		name: name !== '' ? name : 'task',
		properties: {
			selectable: false,
			draggable: false,
			deletable: false
		}
	};
}

export function createBranchedStep(): SwitchStep {
	return {
		id: Uid.next(),
		componentType: 'switch',
		type: 'switch',
		name: 'branched',
		properties: {},
		branches: {
			left: [createTaskStep('')]
		}
	};
}

export function createSwitchStep(): SwitchStep {
	return {
		id: Uid.next(),
		componentType: 'switch',
		type: 'switch',
		name: 'switch',
		properties: {},
		branches: {
			true: [],
			false: []
		}
	};
}

export function createContainerStep(sequence: any, properties: any): ContainerStep {
	return {
		id: Uid.next(),
		componentType: 'container',
		type: 'container',
		name: 'container',
		sequence,
		properties: properties
	}
}


export function createIconStep(): IconStep {
	return {
		id: Uid.next(),
		componentType: 'icon',
		type: 'icon',
		name: 'icon',
		properties: {}
	}
}
