import { Step, BranchedStep, Definition } from 'sequential';

export interface WorkflowDefinition extends Definition {
	properties: {
		alfa?: string;
	};
}

export interface TaskStep extends Step {
	componentType: 'task';
	type: 'task';
	properties: {
		selectable?: boolean;
		draggable?:boolean;
		deletable?: boolean;
	};
}

export interface SwitchStep extends BranchedStep {
	componentType: 'switch';
	type: 'switch';
	properties: {
		x?: string;
		y?: string;
	};
}


export interface BranchStep extends BranchedStep {
	componentType: 'switch',
	type: 'switch',
	properties: {
		x?: string;
		y?: string;
	}
}

export interface IconStep extends Step {
	componentType: 'icon',
	type: 'icon',
	properties: {
		x?: string;
		y?: string;
	}
}

export interface ContainerStep extends Step {
	componentType: 'container',
	type: 'container',
	sequence?: [],
	properties: {
		selectable?: boolean;
		draggable?: boolean;
		deleteable?: boolean;
	}
}